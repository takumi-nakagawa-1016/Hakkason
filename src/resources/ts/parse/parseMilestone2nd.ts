import {Milestone2nd} from "../types/2ndMilestone";

const parse2ndMilestones = (data: any): Milestone2nd[] => {
    if (data) {
        return data.map((item: any) => {
            const milestone: Milestone2nd = {
                id: item.id,
                milestone_id:item.milestone_id,
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

export default parse2ndMilestones;
