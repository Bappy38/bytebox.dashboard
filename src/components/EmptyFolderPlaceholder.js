
const EmptyFolderPlaceholder = ({ onAddFiles }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full p-8 text-center text-gray-500">
            <svg
                className="w-16 h-16 mb-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                />
            </svg>
            <p className="text-lg font-medium">This folder is empty.</p>
            <p className="text-sm mb-4">Add files to get started.</p>
        </div>
    );
};

export default EmptyFolderPlaceholder;