import ContactLeadIn from "@/components/contact/ContactLeadIn";
import MessageForm from "@/components/contact/MessageForm";
import ReachChannelList from "@/components/contact/ReachChannelList";

export default function ContactPage() {
  return (
    <div className="page-shell pb-24 pt-24">
      <ContactLeadIn />
      <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
        <div className="lg:col-span-3 lg:max-w-2xl">
          <MessageForm />
        </div>
        <div className="lg:col-span-2">
          <ReachChannelList />
        </div>
      </div>
    </div>
  );
}
