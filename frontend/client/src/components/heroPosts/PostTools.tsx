import {
    Button,
    Dialog,
    DialogBody,
} from "@material-tailwind/react";
const PostTools = ({ open, toogleToolModal }: { open: boolean, toogleToolModal: () => void }) => {
    const tools = [
        { color: "#ED4956", label: "Report" },
        { color: "#ED4956", label: "Unfollow" },
        { color: "#000", label: "Add to favorites" },
        { color: "#000", label: "Go to post" },
        { color: "#000", label: "Share to..." },
        { color: "#000", label: "Copy link" },
        { color: "#000", label: "Embem" },
        { color: "#000", label: "About this account" },
        { color: "#000", label: "Cancel" },
    ];
    const handleToolClick = (label: string) => {
        if (label === "Cancel") {
            toogleToolModal()
        }
    }
    return (
        <Dialog
            size="sm"
            className="rounded-xl"
            handler={toogleToolModal}
            open={open}
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
            }}
        >
            <DialogBody className="!p-0">
                {
                    tools.map((tool, index) => <button key={index} onClick={() => handleToolClick(tool.label)} style={{ color: tool.color }} className={`w-full min-h-[48px] py-1 px-2 bg-transparent font-[700] text-[13px] ${index === 8 ? 'border-none' : 'border-b'}`}>{tool.label}</button>)
                }
            </DialogBody>

        </Dialog>
    )
}

export default PostTools