import {activitiesList} from "@/contants/";
import slugify from "react-slugify";
import { notFound, useParams } from "next/navigation";
import ActivityPage from "@/components/page/ActivityPage";
import { Suspense } from "react";

export async function generateStaticParams() {
    return activitiesList.map(act => ({
        activity: slugify(act.title)
    }))
}

interface SingleActivityProps {
    params: {
        activity: string
    }
}
const SingleActivity = ({ params }: SingleActivityProps) => {
    const {activity} = params;

    const find = activitiesList.find((act) => slugify(act.title) === activity)

    if (!find) notFound();

    return <Suspense>
        <ActivityPage activity={find}/>
    </Suspense>
}

export default SingleActivity