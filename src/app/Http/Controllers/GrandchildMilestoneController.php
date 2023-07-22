<?php

namespace App\Http\Controllers;

use App\Http\Requests\GrandChildMilestoneRequest;
use App\Services\GrandChildMilestoneServiceInterface;

class GrandchildMilestoneController extends Controller
{
    public function __construct(
        private GrandChildMilestoneServiceInterface $grandChildMilestoneService
    )
    {}

    public function storeGrandChild(GrandChildMilestoneRequest $request)
    {
        $result = $this->grandChildMilestoneService->storeGrandChild(
            $request->getChileMilestoneId(),
            $request->getName(),
            $request->getDescription(),
            $request->getDueDate(),
        );

        return response()->json($result);
    }

    public function updateGrandChild(GrandChildMilestoneRequest $request)
    {
        $result = $this->grandChildMilestoneService->updateGrandChild(
            $request->getId(),
            $request->getName(),
            $request->getDescription(),
            $request->getStatus(),
            $request->getDueDate(),
        );

        return response()->json($result);
    }

    public function deleteGrandChild(GrandChildMilestoneRequest $request)
    {
        $result = $this->grandChildMilestoneService->deleteGrandChild(
            $request->getId(),
        );

        return response()->json($result);
    }

    public function fetchGrandChildOfChild(GrandChildMilestoneRequest $request)
    {
        $result = $this->grandChildMilestoneService->fetchGrandChildOfChild(
            $request->getChileMilestoneId(),
        );

        return response()->json($result);
    }
}
