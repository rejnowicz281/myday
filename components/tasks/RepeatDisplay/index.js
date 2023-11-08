export default function RepeatDisplay({ repeat }) {
    return (
        <span>
            {repeat == 0
                ? "Not Repeating"
                : repeat == 1
                ? "Repeating Daily"
                : repeat == 7
                ? "Repeating Weekly"
                : repeat == 30
                ? "Repeating Monthly"
                : repeat == 365
                ? "Repeating Yearly"
                : `Repeating every ${repeat} days`}
        </span>
    );
}
