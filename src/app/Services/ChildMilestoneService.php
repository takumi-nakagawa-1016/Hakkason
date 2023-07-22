<?php

declare(strict_types=1);

namespace App\Services;

use App\Repositories\ChildMilestoneRepositoryInterface;

class ChildMilestoneService implements ChildMilestoneServiceInterface
{
    public function __construct(
        private ChildMilestoneRepositoryInterface $childMilestoneRepository,
    )
    {}

    public function storeChild(string $milestoneId, string $name, string $description, string $due_date): bool
    {
        $childMilestone = [
            'milestone_id' => $milestoneId,
            'name' => $name,
            'description' => $description,
            'status' => 0,
            'due_date' => $due_date,
        ];

        return $this->childMilestoneRepository->storeChild(
            $childMilestone
        );
    }

    public function updateChild(
        string $childId,
        string $name,
        string $description,
        string $status,
        string $due_date
    ): bool
    {
        $childMilestone = $this->childMilestoneRepository->findChild($childId);

        $childMilestone->name = $name;
        $childMilestone->description = $description;
        $childMilestone->status = $status;
        $childMilestone->due_date = $due_date;

        return $this->childMilestoneRepository->updateChild($childMilestone);
    }

    public function deleteChild(string $id): bool
    {
        $childMilestone = $this->childMilestoneRepository->findChild($id);

        return $this->childMilestoneRepository->deleteChild($childMilestone);
    }

    public function updateChildStatus(string $id, int $status): bool
    {
        $childMilestone = $this->childMilestoneRepository->findChild($id);

        $childMilestone->status = $status;

        return $this->childMilestoneRepository->updateChild($childMilestone);
    }
}