/**
 * Zoom Server-to-Server OAuth helper
 * Requires env vars: ZOOM_ACCOUNT_ID, ZOOM_CLIENT_ID, ZOOM_CLIENT_SECRET
 */

export const runtime = "nodejs";

type ZoomTokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

type ZoomMeetingResponse = {
  id: number;
  uuid: string;
  topic: string;
  start_time: string;
  duration: number;
  join_url: string;
  start_url: string;
  password: string;
};

/** Obtient un token OAuth Zoom (Server-to-Server) */
export async function getZoomAccessToken(): Promise<string> {
  const accountId = process.env.ZOOM_ACCOUNT_ID;
  const clientId = process.env.ZOOM_CLIENT_ID;
  const clientSecret = process.env.ZOOM_CLIENT_SECRET;

  if (!accountId || !clientId || !clientSecret) {
    throw new Error(
      "Variables Zoom manquantes (ZOOM_ACCOUNT_ID, ZOOM_CLIENT_ID, ZOOM_CLIENT_SECRET)"
    );
  }

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const res = await fetch(
    `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${accountId}`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Zoom OAuth error (${res.status}): ${errText}`);
  }

  const data = (await res.json()) as ZoomTokenResponse;
  return data.access_token;
}

/**
 * Crée une réunion Zoom et retourne join_url, start_url et meeting_id
 */
export async function createZoomMeeting(options: {
  topic: string;
  startTime: string; // ISO 8601, ex: "2025-06-15T10:00:00"
  durationMinutes: number;
  agenda?: string;
}): Promise<{
  meetingId: string;
  joinUrl: string;
  startUrl: string;
  password: string;
}> {
  const token = await getZoomAccessToken();

  const body = {
    topic: options.topic,
    type: 2, // Scheduled meeting
    start_time: options.startTime,
    duration: options.durationMinutes,
    agenda: options.agenda ?? "",
    settings: {
      host_video: true,
      participant_video: true,
      join_before_host: false,
      waiting_room: true,
      mute_upon_entry: false,
      auto_recording: "none",
    },
  };

  const res = await fetch("https://api.zoom.us/v2/users/me/meetings", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Zoom API error (${res.status}): ${errText}`);
  }

  const data = (await res.json()) as ZoomMeetingResponse;

  return {
    meetingId: String(data.id),
    joinUrl: data.join_url,
    startUrl: data.start_url,
    password: data.password,
  };
}

/** Supprime une réunion Zoom */
export async function deleteZoomMeeting(meetingId: string): Promise<void> {
  const token = await getZoomAccessToken();

  const res = await fetch(`https://api.zoom.us/v2/meetings/${meetingId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // 204 = succès, 404 = déjà supprimé (toléré)
  if (!res.ok && res.status !== 404) {
    const errText = await res.text();
    throw new Error(`Zoom delete error (${res.status}): ${errText}`);
  }
}
