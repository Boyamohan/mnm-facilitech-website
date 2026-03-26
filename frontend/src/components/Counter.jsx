import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Counter({ value, suffix, label }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <div ref={ref} className="card-base text-center">
      <div className="text-4xl font-bold text-brand-primary">
        {inView ? (
          <CountUp end={value} duration={2} suffix={suffix} />
        ) : (
          `0 ${suffix}`
        )}
      </div>
      <div className="mt-2 text-sm font-medium text-gray-600">
        {label}
      </div>
    </div>
  );
}
