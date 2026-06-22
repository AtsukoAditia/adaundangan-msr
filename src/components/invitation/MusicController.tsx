"use client";

import { Button } from "@/components/ui/Button";
import { AudioConfig } from "@/types/invitation";
import { Volume2, VolumeX } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

interface Props {
  audio: AudioConfig;
  autoPlay?: boolean;
}

export default function MusicController({ audio, autoPlay }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = new Audio(audio.src);
    el.loop = true;
    el.preload = "auto";
    audioRef.current = el;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);

    return () => {
      el.pause();
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
      audioRef.current = null;
    };
  }, [audio.src]);

  useEffect(() => {
    if (autoPlay && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, [autoPlay]);

  const toggle = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="outline"
      onClick={toggle}
      className="fixed bottom-4 right-4 z-40 rounded-full h-12 w-12 bg-white/80 backdrop-blur-sm shadow-lg border-gold/30 text-burgundy hover:bg-gold/10 p-0"
      aria-label={isPlaying ? "Hentikan musik" : "Putar musik"}
    >
      {isPlaying ? (
        <Volume2 className="h-5 w-5" />
      ) : (
        <VolumeX className="h-5 w-5" />
      )}
    </Button>
  );
}
