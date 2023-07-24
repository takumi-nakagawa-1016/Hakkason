import {Milestone3} from "../../types/Milestone3";

const parseMilestone3 = (data: any): Milestone3[] => {
    if (data) {
        return data.map((item: any) => {
            const milestone: Milestone3 = {
                id: item.id,
                child_milestone_id: item.child_milestone_id,
                name: item.name,
                description: item.description || null,
                status: item.status,
                due_date: item.due_date,
            };
            return milestone;
        });
    } else {
        console.error("Invalid data format. Expected an array.");
        return [];
    }
};

export default parseMilestone3;
