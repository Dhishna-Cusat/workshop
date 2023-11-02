import React, {Fragment} from 'react';
import Image from "next/image";
import event from "@/images/ws1.jpg";
import WorkshopInfo from "@/components/WorkshopInfo";

const WorkshopCard = ({data}) => {
    return (
        <Fragment>
            <div className="flex w-[300px] h-[300px] group p-2 relative">
                <Image src={data?.logo} alt={"event"} width={300} height={300}
                       className={"object-cover object-center  group-hover:scale-90 transition duration-300 ease-in-out"}
                />
                <WorkshopInfo position={2}/>
                <WorkshopInfo position={3}/>
            </div>
        </Fragment>
    );
};

export default WorkshopCard;
