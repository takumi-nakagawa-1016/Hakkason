<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use app\Models\ChildMilestone;

class GrandchildMilestone extends Model
{
    use HasFactory;

    protected $table = 'grandchild_milestones';

    protected $guarded = [
        'created_at',
        'updated_at',
    ];

    /**
     * 子マイルストーン
     */
    public function child_milestone()
    {
        return $this->belongsTo(ChildMilestone::class);
    }
}
