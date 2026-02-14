import React, { useState, useRef, useEffect } from 'react';
import { SimpleBackgroundVideo } from './SimpleBackgroundVideo';

interface PlayerProps {
  youtubeId: string;
  onPlayingChange?: (isPlaying: boolean) => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

export function Player({ youtubeId, onPlayingChange, onNext, onPrevious }: PlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const playerRef = useRef<any>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Reset state when youtubeId changes
  useEffect(() => {
    setIsReady(false);
    setIsPlaying(false);
    setHasError(false);
  }, [youtubeId]);

  // Initialize YouTube API when component mounts
  useEffect(() => {
    // Load YouTube IFrame API if not already loaded
    if (!(window as any).YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      
      (window as any).onYouTubeIframeAPIReady = () => {
        initializePlayer();
      };
    } else {
      initializePlayer();
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy?.();
      }
    };
  }, [youtubeId]);

  const initializePlayer = () => {
    if (playerRef.current) {
      playerRef.current.destroy();
    }

    playerRef.current = new (window as any).YT.Player('youtube-audio-player', {
      height: '0',
      width: '0',
      videoId: youtubeId,
      playerVars: {
        autoplay: 1,
        controls: 0,
        disablekb: 1,
        fs: 0,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        iv_load_policy: 3,
        cc_load_policy: 0,
        playsinline: 1
      },
      events: {
        onReady: (event: any) => {
          setIsReady(true);
          // Auto-start playing when YouTube player is ready
          event.target.playVideo();
        },
        onStateChange: (event: any) => {
          const playerState = event.data;
          const newIsPlaying = playerState === (window as any).YT.PlayerState.PLAYING;
          setIsPlaying(newIsPlaying);
          onPlayingChange?.(newIsPlaying);
        },
        onError: (event: any) => {
          console.error('YouTube player error:', event.data);
          setHasError(true);
          setIsReady(false);
          // Error codes:
          // 2 – Invalid parameter
          // 5 – HTML5 player error
          // 100 – Video not found or private
          // 101/150 – Video restricted from playback on certain sites
          if (event.data === 150 || event.data === 101) {
            // Video restricted, auto-skip to next
            setTimeout(() => {
              onNext?.();
            }, 2000);
          }
        }
      }
    });
  };

  const handleTogglePlay = () => {
    if (!isReady || !playerRef.current) return;

    try {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    } catch (error) {
      console.error('Error controlling YouTube player:', error);
    }
  };

  return (
    <>
      {/* Hidden YouTube Audio Player */}
      <div id="youtube-audio-player" style={{ display: 'none' }} />
      
      {/* Simple Background Video */}
      <SimpleBackgroundVideo youtubeId={youtubeId} isPlaying={isPlaying} />

      {/* iOS-style Music Controls */}
      <div className="flex flex-col items-center gap-6 relative" style={{ zIndex: 100 }}>
        {/* Main Controls Row */}
        <div className="flex items-center gap-8">
          {/* Previous Button */}
          <button
            className="group relative flex items-center justify-center w-12 h-12 
                       text-white/80 hover:text-white transition-all duration-200 
                       transform hover:scale-110 active:scale-95"
            disabled={!onPrevious}
            onClick={onPrevious}
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
            </svg>
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={handleTogglePlay}
            disabled={!isReady}
            className={`group relative flex items-center justify-center w-20 h-20 
                       bg-white rounded-full shadow-2xl hover:shadow-3xl 
                       transition-all duration-300 transform hover:scale-105 active:scale-95
                       ${!isReady ? 'opacity-50 cursor-not-allowed' : ''}`}
            style={{
              boxShadow: `
                0 12px 40px rgba(255,255,255,0.3),
                0 4px 16px rgba(0,0,0,0.1),
                inset 0 1px 3px rgba(255,255,255,0.2)
              `
            }}
          >
            {!isReady ? (
              <svg 
                className="w-8 h-8 text-black animate-spin" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : !isPlaying ? (
              <svg 
                className="w-8 h-8 text-black ml-1 group-hover:text-gray-800 transition-colors" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z"/>
              </svg>
            ) : (
              <svg 
                className="w-8 h-8 text-black group-hover:text-gray-800 transition-colors" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            )}
            
            {/* iOS-style glow effect */}
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 
                            transition-opacity duration-300"></div>
          </button>

          {/* Next Button */}
          <button
            className="group relative flex items-center justify-center w-12 h-12 
                       text-white/80 hover:text-white transition-all duration-200 
                       transform hover:scale-110 active:scale-95"
            disabled={!onNext}
            onClick={onNext}
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
            </svg>
          </button>
        </div>

        {/* Status Text */}
        <p className="text-sm text-gray-400 font-light tracking-wide relative" style={{ zIndex: 100 }}>
          {!isReady ? 'Loading...' : isPlaying ? 'Now Playing' : 'Tap to play'}
        </p>
      </div>
    </>
  );
}