import { MessageSquare } from "lucide-react"

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        <div className="flex justify-center map-4 mb-4">
          <div className="relative">
            <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center animate-spin hover:scale-110 duration-700">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold">Welcome to Chatify</h2>
        <p className="text-base-content/60">Select a conversation from the sidebar to start chatting</p>
      </div>
    </div>
  )
}

export default NoChatSelected
