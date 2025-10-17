import ChatAssistant from "@/components/ChatAssistant";

export const metadata = { title: "For Families — AI Help" };

export default function ForFamilies() {
  return (
    <div className="grid gap-6">
      <h1 className="text-3xl font-semibold">For Families</h1>
      <p className="text-neutral-700">Ask questions and we’ll point you to resources and next steps.</p>
      <ChatAssistant />
    </div>
  );
}
