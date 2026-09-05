import { describe, it, expect } from "vitest";
import { DEFAULT_THRESHOLDS, type SpeedThresholds } from "@/utils/internetSpeedTest";

describe("InternetSpeed Utilities", () => {
  it("defines standard proctoring thresholds", () => {
    expect(DEFAULT_THRESHOLDS.minDownloadMbps).toBeGreaterThan(0);
    expect(DEFAULT_THRESHOLDS.minUploadMbps).toBeGreaterThan(0);
    expect(DEFAULT_THRESHOLDS.maxPingMs).toBeGreaterThan(0);
  });

  it("evaluates custom threshold constraints", () => {
    const customThresholds: SpeedThresholds = {
      minDownloadMbps: 10,
      minUploadMbps: 2,
      maxPingMs: 150,
    };

    const isSpeedAcceptable = (
      download: number,
      upload: number,
      ping: number,
      thresholds: SpeedThresholds
    ) => {
      return (
        download >= thresholds.minDownloadMbps &&
        upload >= thresholds.minUploadMbps &&
        ping <= thresholds.maxPingMs
      );
    };

    expect(isSpeedAcceptable(15, 5, 50, customThresholds)).toBe(true);
    expect(isSpeedAcceptable(5, 5, 50, customThresholds)).toBe(false);
    expect(isSpeedAcceptable(15, 1, 50, customThresholds)).toBe(false);
    expect(isSpeedAcceptable(15, 5, 200, customThresholds)).toBe(false);
  });
});
