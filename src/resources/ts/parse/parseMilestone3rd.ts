import {Milestone2nd} from "../types/2ndMilestone";
import {Milestone3rd} from "../types/3rdMilestone";

const parse3rdMilestones = (data: any): Milestone3rd[] => {
    if (data) {
        return data.map((item: any) => {
            const milestone: Milestone3rd = {
                id: item.id,
                child_milestone_id:item.child_milestone_id,
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

export default parse3rdMilestones;
