<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\ChildMilestone;
use Carbon\Carbon;

class ChildMilestoneRepository implements ChildMilestoneRepositoryInterface
{
    public function storeChild(array $childMilestone): bool
    {
        return (bool) ChildMilestone::create([
            'milestone_id' => $childMilestone['milestone_id'],
            'name' => $childMilestone['name'],
            'description' => $childMilestone['description'],
            'status' => $childMilestone['status'],
            'due_date' => Carbon::parse($childMilestone['due_date']),
            ]);
    }

    public function updateChild(array $childMilestone): bool
    {
        return ChildMilestone::update([
            'name' => $childMilestone['name'],
            'description' => $childMilestone['description'],
            'status' => $childMilestone['status'],
            'due_date' => Carbon::parse($childMilestone['due_date']),
        ]);
    }

    public function deleteChild(ChildMilestone $childMilestone): bool
    {
        return $childMilestone->delete();
    }

    public function findChild(string $childId): ChildMilestone
    {
        return ChildMilestone::query()
            ->find($childId)
            ->first();
    }
}