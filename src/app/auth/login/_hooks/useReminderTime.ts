import { useEffect, useState } from "react";

/**
 * calculate reminding time and return it
 * @param remindingMinutes - start count down from this number - is it minutes
 * @returns
 */
export const useReminderTime = (remindingMinutes: number) => {
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return formatTime(remindingMinutes * 60 + secondsElapsed);
};

function formatTime(seconds: number) {
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return [
    mins.toString().padStart(2, "0"),
    secs.toString().padStart(2, "0"),
  ].join(":");
}
