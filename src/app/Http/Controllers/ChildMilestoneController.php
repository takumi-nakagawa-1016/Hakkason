<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChildMilestoneRequest;
use App\Http\Requests\FetchRequest;
use App\Models\ChildMilestone;
use App\Services\ChildMilestoneServiceInterface;

class ChildMilestoneController extends Controller
{
    public function __construct(
        private ChildMilestoneServiceInterface $childMilestoneService,
    )
    {}

    public function storeChild(ChildMilestoneRequest $request)
    {
        $result = $this->childMilestoneService->storeChild(
            $request->getMilestoneId(),
            $request->getName(),
            $request->getDescription(),
            $request->getDueDate(),
        );

        return response()->json($result);

    }

    public function updateChild(ChildMilestoneRequest $request)
    {
        $result = $this->childMilestoneService->updateChild(
            $request->getId(),
            $request->getName(),
            $request->getDescription(),
            $request->getStatus(),
            $request->getDueDate(),
        );

        return response()->json($result);
    }

    public function deleteChild(ChildMilestoneRequest $request)
    {
        $result = $this->childMilestoneService->deleteChild(
            $request->getId(),
        );

        return response()->json($result);
    }

    public function updateChildStatus(ChildMilestoneRequest $request)
    {

    }
    public function fetchChildMilestones(FetchRequest $request)
    {
        $milestone_id = $request->getMilestoneId();
        $childMilestones = ChildMilestone::where('milestone_id', $milestone_id)->get()->toArray();
        return response()->json(['childMilestones' => $childMilestones]);
    }

}
