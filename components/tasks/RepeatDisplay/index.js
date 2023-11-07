export default function RepeatDisplay({ repeat }) {
    return (
        <span>
            {repeat == 0
                ? "Not"
                : repeat == 1
                ? "Daily"
                : repeat == 7
                ? "Weekly"
                : repeat == 30
                ? "Monthly"
                : repeat == 365
                ? "Yearly"
                : `every ${repeat} days`}
        </span>
    );
}
