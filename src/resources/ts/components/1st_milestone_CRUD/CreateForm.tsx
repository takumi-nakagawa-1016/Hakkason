import React from "react";
import {Milestone} from "../../types/Milestone";
import {Box, Button, FormControl, FormLabel, Input, Stack, Flex} from "@chakra-ui/react";
import axios from "axios";

interface CreateFormProps{
    milestone: Milestone,
    setMilestone: React.Dispatch<React.SetStateAction<Milestone>>
}
const CreateForm: React.FC<CreateFormProps> = ({milestone, setMilestone}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setMilestone((prevMilestone) => ({
            ...prevMilestone,
            [name]: value,
        }));
        console.log(milestone)
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const csrfToken = document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')?.content;
            if (!csrfToken) {
                console.error("CSRF token not found.");
                return;
            }

            const response = await axios.post("api/milestone/store", milestone, {
                headers: {
                    "X-CSRF-TOKEN": csrfToken,
                },
            });

            if (response.status === 200) {
                // リクエストが成功した場合の処理
                const data = response.data;
                console.log("Milestone created successfully:", data);
                // 成功したら、何かの処理を追加する
            } else {
                // リクエストが失敗した場合の処理
                console.error("Failed to create Milestone");
                // エラー処理を追加する
            }
        } catch (error) {
            console.error("Error occurred while creating Milestone:", error);
            // エラー処理を追加する
        }
    };

    return (
        <Flex align="center" justify="center">
            <Box as="form" onSubmit={handleSubmit}>
                <Stack spacing={4}>
                    <FormControl>
                        <FormLabel>Name:</FormLabel>
                        <Input type="text" name="name" value={milestone.name} onChange={handleChange} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Description:</FormLabel>
                        <Input type="textarea" name="description" value={milestone.description || ""} onChange={handleChange} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Status:</FormLabel>
                        <Input type="number" name="status" value={milestone.status} onChange={handleChange} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Deadline:</FormLabel>
                        <Input type="date" name="deadline" value={milestone.due_date} onChange={handleChange} />
                    </FormControl>
                    <Button type="submit">Create Milestone</Button>
                </Stack>
            </Box>
        </Flex>
    )
}
export default CreateForm
