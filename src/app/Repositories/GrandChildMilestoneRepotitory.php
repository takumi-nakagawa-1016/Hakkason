<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\GrandchildMilestone;
use Illuminate\Support\Collection;


class GrandChildMilestoneRepotitory implements GrandChildMilestoneRepositoryInterface
{
    public function storeGrandChild(array $grandChild): bool
    {
        return GrandchildMilestone::create([
            'child_milestone_id' => $grandChild['child_milestone_id'],
            'name' => $grandChild['name'],
            'description' => $grandChild['description'],
            'status' => $grandChild['status'],
            'due_date' => $grandChild['due_date'],
        ]);
    }

    public function updateGrandChild(GrandchildMilestone $grandChild): bool
    {
        return $grandChild->update();
    }

    public function deleteGrandChild(GrandchildMilestone $grandChild): bool
    {
        return $grandChild->delete();
    }

    public function findGrandChild(string $id): GrandchildMilestone
    {
        return GrandchildMilestone::query()
            ->find($id)
            ->first();
    }

    public function fetchGrandChildOfChild(string $childMilestoneId): Collection
    {
        return GrandchildMilestone::query()
            ->where('child_milestone_id', $childMilestoneId)
            ->get();
    }
}