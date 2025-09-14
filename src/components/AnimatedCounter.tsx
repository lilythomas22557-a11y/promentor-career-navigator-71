import { useCountUp } from "@/hooks/useCountUp";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter = ({ value, duration = 2000, className = "" }: AnimatedCounterProps) => {
  // Extract number and suffix from value (e.g., "523+" -> 523 and "+")
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const numericValue = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : '';
  
  const { value: animatedValue, ref } = useCountUp({
    end: numericValue,
    suffix,
    duration,
    decimals: numericValue % 1 !== 0 ? 1 : 0
  });

  return (
    <div ref={ref} className={className}>
      {animatedValue}
    </div>
  );
};