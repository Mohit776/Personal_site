import React, { useEffect, useRef, useCallback, useMemo } from "react";

const DEFAULT_BEHIND_GRADIENT =
  "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)";

const DEFAULT_INNER_GRADIENT =
  "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)";

const ANIMATION_CONFIG = {
  SMOOTH_DURATION: 600,
  INITIAL_DURATION: 1500,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
};

const clamp = (value, min = 0, max = 100) =>
  Math.min(Math.max(value, min), max);

const round = (value, precision = 3) =>
  parseFloat(value.toFixed(precision));

const adjust = (value, fromMin, fromMax, toMin, toMax) =>
  round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin));

const easeInOutCubic = (x) =>
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

const ProfileCard = ({
  avatarUrl = "<Placeholder for avatar URL>",
  iconUrl = "<Placeholder for icon URL>",
  grainUrl = "<Placeholder for grain URL>",
  behindGradient,
  innerGradient,
  showBehindGradient = true,
  className = "",
  enableTilt = true,
  miniAvatarUrl,
  name = "Javi A. Torres",
  title = "Software Engineer",
  handle = "javicodes",
  status = "Online",
  contactText = "Contact",
  showUserInfo = true,
  onContactClick,
}) => {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);

  const animationHandlers = useMemo(() => {
    if (!enableTilt) return null;

    let rafId = null;

    const updateCardTransform = (offsetX, offsetY, card, wrap) => {
      const width = card.clientWidth;
      const height = card.clientHeight;

      const percentX = clamp((100 / width) * offsetX);
      const percentY = clamp((100 / height) * offsetY);

      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties = {
        "--pointer-x": `${percentX}%`,
        "--pointer-y": `${percentY}%`,
        "--background-x": `${adjust(percentX, 0, 100, 35, 65)}%`,
        "--background-y": `${adjust(percentY, 0, 100, 35, 65)}%`,
        "--pointer-from-center": `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
        "--pointer-from-top": `${percentY / 100}`,
        "--pointer-from-left": `${percentX / 100}`,
        "--rotate-x": `${round(-(centerX / 5))}deg`,
        "--rotate-y": `${round(centerY / 4)}deg`,
      };

      Object.entries(properties).forEach(([property, value]) => {
        wrap.style.setProperty(property, value);
      });
    };

    const createSmoothAnimation = (duration, startX, startY, card, wrap) => {
      const startTime = performance.now();
      const targetX = wrap.clientWidth / 2;
      const targetY = wrap.clientHeight / 2;

      const animationLoop = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = clamp(elapsed / duration);
        const easedProgress = easeInOutCubic(progress);

        const currentX = adjust(easedProgress, 0, 1, startX, targetX);
        const currentY = adjust(easedProgress, 0, 1, startY, targetY);

        updateCardTransform(currentX, currentY, card, wrap);

        if (progress < 1) {
          rafId = requestAnimationFrame(animationLoop);
        }
      };

      rafId = requestAnimationFrame(animationLoop);
    };

    return {
      updateCardTransform,
      createSmoothAnimation,
      cancelAnimation: () => {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      },
    };
  }, [enableTilt]);

  const handlePointerMove = useCallback(
    (event) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;

      if (!card || !wrap || !animationHandlers) return;

      const rect = card.getBoundingClientRect();
      animationHandlers.updateCardTransform(
        event.clientX - rect.left,
        event.clientY - rect.top,
        card,
        wrap
      );
    },
    [animationHandlers]
  );

  const handlePointerEnter = useCallback(() => {
    const card = cardRef.current;
    const wrap = wrapRef.current;

    if (!card || !wrap || !animationHandlers) return;

    animationHandlers.cancelAnimation();
    wrap.classList.add("active");
    card.classList.add("active");
  }, [animationHandlers]);

  const handlePointerLeave = useCallback(
    (event) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;

      if (!card || !wrap || !animationHandlers) return;

      animationHandlers.createSmoothAnimation(
        ANIMATION_CONFIG.SMOOTH_DURATION,
        event.offsetX,
        event.offsetY,
        card,
        wrap
      );
      wrap.classList.remove("active");
      card.classList.remove("active");
    },
    [animationHandlers]
  );

  useEffect(() => {
    if (!enableTilt || !animationHandlers) return;

    const card = cardRef.current;
    const wrap = wrapRef.current;

    if (!card || !wrap) return;

    const pointerMoveHandler = handlePointerMove;
    const pointerEnterHandler = handlePointerEnter;
    const pointerLeaveHandler = handlePointerLeave;

    card.addEventListener("pointerenter", pointerEnterHandler);
    card.addEventListener("pointermove", pointerMoveHandler);
    card.addEventListener("pointerleave", pointerLeaveHandler);

    const initialX = wrap.clientWidth - ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;

    animationHandlers.updateCardTransform(initialX, initialY, card, wrap);
    animationHandlers.createSmoothAnimation(
      ANIMATION_CONFIG.INITIAL_DURATION,
      initialX,
      initialY,
      card,
      wrap
    );

    return () => {
      card.removeEventListener("pointerenter", pointerEnterHandler);
      card.removeEventListener("pointermove", pointerMoveHandler);
      card.removeEventListener("pointerleave", pointerLeaveHandler);
      animationHandlers.cancelAnimation();
    };
  }, [
    enableTilt,
    animationHandlers,
    handlePointerMove,
    handlePointerEnter,
    handlePointerLeave,
  ]);

  const cardStyle = useMemo(
    () => ({
      "--icon": iconUrl ? `url(${iconUrl})` : "none",
      "--grain": grainUrl ? `url(${grainUrl})` : "none",
      "--behind-gradient": showBehindGradient
        ? behindGradient ?? DEFAULT_BEHIND_GRADIENT
        : "none",
      "--inner-gradient": innerGradient ?? DEFAULT_INNER_GRADIENT,
    }),
    [iconUrl, grainUrl, showBehindGradient, behindGradient, innerGradient]
  );

  const handleContactClick = useCallback(() => {
    onContactClick?.();
  }, [onContactClick]);

  return (
    <div
      ref={wrapRef}
      className={`relative perspective-500 transform-gpu touch-none ${className}`}
      style={cardStyle}
    >
      {/* Background glow effect */}
      <div className="absolute -inset-2.5 bg-inherit bg-cover rounded-inherit transition-all duration-500 ease-in-out filter contrast-200 saturate-200 blur-3xl scale-80 transform-gpu bg-no-repeat active:filter-contrast-100 active:saturate-200 active:blur-xl active:scale-90" 
           style={{ backgroundImage: 'var(--behind-gradient)' }} />

      {/* Main card */}
      <section
        ref={cardRef}
        className="h-[80svh] max-h-[540px] grid aspect-[0.718] rounded-[30px] relative bg-blend-color-dodge shadow-lg transition-transform duration-1000 ease-in-out transform-gpu overflow-hidden"
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.8) calc((var(--pointer-from-left) * 10px) - 3px) calc((var(--pointer-from-top) * 20px) - 6px) 20px -5px',
          backgroundImage: 'var(--behind-gradient)',
          transform: 'translate3d(0, 0, 0.1px) rotateX(0deg) rotateY(0deg)',
        }}
      >
        {/* Card content */}
        <div className="absolute inset-px rounded-[30px] transform-gpu z-10" 
             style={{ backgroundImage: 'var(--inner-gradient)', backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
          
          {/* Shine effect */}
          <div 
            className="absolute inset-0 rounded-[30px] z-30 mix-blend-color-dodge filter brightness-75 contrast-133 saturate-33 opacity-50"
            style={{
              maskImage: 'var(--icon)',
              maskMode: 'luminance',
              maskSize: '150%',
              maskPosition: 'top calc(200% - (var(--background-y) * 5)) left calc(100% - var(--background-x))',
              backgroundImage: `
                repeating-linear-gradient(0deg, 
                  var(--sunpillar-clr-1) 5%, 
                  var(--sunpillar-clr-2) 10%, 
                  var(--sunpillar-clr-3) 15%, 
                  var(--sunpillar-clr-4) 20%, 
                  var(--sunpillar-clr-5) 25%, 
                  var(--sunpillar-clr-6) 30%, 
                  var(--sunpillar-clr-1) 35%),
                repeating-linear-gradient(-45deg, #0e152e 0%, hsl(180, 10%, 60%) 3.8%, hsl(180, 29%, 66%) 4.5%, hsl(180, 10%, 60%) 5.2%, #0e152e 10%, #0e152e 12%),
                radial-gradient(farthest-corner circle at var(--pointer-x) var(--pointer-y), hsla(0, 0%, 0%, 0.1) 12%, hsla(0, 0%, 0%, 0.15) 20%, hsla(0, 0%, 0%, 0.25) 120%)
              `,
              backgroundBlendMode: 'color, hard-light',
              backgroundSize: '500% 500%, 300% 300%, 200% 200%',
            }}
          />

          {/* Glare effect */}
          <div 
            className="absolute inset-0 rounded-[30px] z-40 mix-blend-overlay filter brightness-80 contrast-120"
            style={{
              backgroundImage: 'radial-gradient(farthest-corner circle at var(--pointer-x) var(--pointer-y), hsl(248, 25%, 80%) 12%, hsla(207, 40%, 30%, 0.8) 90%)'
            }}
          />

          {/* Avatar content */}
          <div className="relative w-full h-full mix-blend-screen overflow-hidden">
            <img
              className="absolute w-full left-1/2 -translate-x-1/2 bottom-0.5"
              style={{ opacity: 'calc(1.75 - var(--pointer-from-center))' }}
              src={avatarUrl}
              alt={`${name || "User"} avatar`}
              loading="lazy"
              onError={(e) => {
                const target = e.target;
                target.style.display = "none";
              }}
            />
            
            {/* Gradient overlay */}
            <div 
              className="absolute inset-0 z-10 backdrop-blur-xl pointer-events-none"
              style={{
                mask: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 1) 100%)'
              }}
            />
          </div>

          {/* User info section */}
          {showUserInfo && (
            <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-3 pointer-events-auto">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                  <img
                    src={miniAvatarUrl || avatarUrl}
                    alt={`${name || "User"} mini avatar`}
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target;
                      target.style.opacity = "0.5";
                      target.src = avatarUrl;
                    }}
                  />
                </div>
                <div className="flex flex-col items-start gap-1.5">
                  <div className="text-sm font-medium text-white/90">@{handle}</div>
                  <div className="text-sm text-white/70">{status}</div>
                </div>
              </div>
              <button
                className="border border-white/10 rounded-lg px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-sm transition-all duration-200 ease-in-out hover:border-white/40 hover:-translate-y-px"
                onClick={handleContactClick}
                type="button"
                aria-label={`Contact ${name || "user"}`}
              >
                {contactText}
              </button>
            </div>
          )}

          {/* Name and title */}
          <div className="absolute top-12 w-full flex flex-col items-center z-50 mix-blend-luminosity">
            <h3 className="font-semibold text-[min(5svh,3em)] m-0 bg-gradient-to-b from-white to-[#6f6fbe] bg-clip-text text-transparent">
              {name}
            </h3>
            <p className="font-semibold text-base mt-2 mx-auto w-min relative -top-3 whitespace-nowrap bg-gradient-to-b from-white to-[#4a4ac0] bg-clip-text text-transparent">
              {title}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(ProfileCard);