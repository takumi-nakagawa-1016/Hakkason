<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\GrandChildMilestone;
use App\Repositories\GrandChildMilestoneRepositoryInterface;
use Carbon\Carbon;
use Illuminate\Support\Collection;

class GrandChildMilestoneService implements GrandChildMilestoneServiceInterface
{
    public function __construct(
        private GrandChildMilestoneRepositoryInterface $grandChildMilestoneRepository,
    )
    {}

    public function storeGrandChild(
        string $childMilestoneId,
        string $name,
        string $description,
        string $due_date
    ): bool
    {
        $grandChild = [
            'child_milestone_id' => $childMilestoneId,
            'name' => $name,
            'description' => $description,
            'status' => 0,
            'due_date' => $due_date,
        ];

        return $this->grandChildMilestoneRepository->storeGrandChild($grandChild);
    }

    public function updateGrandChild(
        string $id,
        string $name,
        string $description,
        string $status,
        string $due_date
    ): bool
    {
        $grandChild = $this->grandChildMilestoneRepository->findGrandChild($id);
        $grandChild->name = $name;
        $grandChild->description = $description;
        $grandChild->status = $status;
        $grandChild->due_date = Carbon::parse($due_date);

        return $this->grandChildMilestoneRepository->updateGrandChild($grandChild);
    }

    public function deleteGrandChild(string $id): bool
    {
        $grandChild = $this->grandChildMilestoneRepository->findGrandChild($id);

        return $this->grandChildMilestoneRepository->deleteGrandChild($grandChild);
    }

    public function fetchGrandChildOfChild(string $childMilestoneId): Collection
    {
        return $this->grandChildMilestoneRepository->fetchGrandChildOfChild($childMilestoneId);
    }

}
