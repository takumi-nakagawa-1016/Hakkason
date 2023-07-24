import { Milestone } from "../types/Milestone";

const parseMilestones = (data: any): Milestone[] => {
    if (data) {
        return data.map((item: any) => {
            const milestone: Milestone = {
                id: item.id,
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

export default parseMilestones;
