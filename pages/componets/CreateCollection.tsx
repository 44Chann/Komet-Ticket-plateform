import { useState } from "react";
import Collections from "./collections";
import CreateCollectionForm from "./CreateCollectionForm";


const CreateCollection = () => {
    const [showModal, setShowModal] = useState(false)
    const [showCollection, setShowCollection] = useState(false)
    return (
        <>
            <div className="w-full h-full flex  justify-end">
                <button className="p-3 bg-purple-500 text-white" onClick={() => setShowModal(!showModal)}>Create Collection</button>
            </div>
            <CreateCollectionForm showModal={showModal} setShowModal={setShowModal} showCollection={showCollection} setShowCollection={setShowCollection} />
            <div>
                {
                    showCollection ?
                        <Collections /> : null
                }
            </div>
        </>
    )
}

export default CreateCollection;