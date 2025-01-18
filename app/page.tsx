import { Calendar } from "@/components/calendar";

export default function Home() {
  return (
    <div className="w-full max-w-3xl mx-auto p-4 space-y-8">
      <Calendar />
      <p className="italic font-thin text-muted-foreground flex justify-center">
        What are you waiting for?
      </p>
    </div>
  );
}
