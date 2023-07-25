<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * App\Models\ChildMilestone
 *
 * @property int $id
 * @property int $milestone_id
 * @property string $name
 * @property string|null $description
 * @property int $status
 * @property string $due_date
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|ChildMilestone newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ChildMilestone newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ChildMilestone query()
 * @method static \Illuminate\Database\Eloquent\Builder|ChildMilestone whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChildMilestone whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChildMilestone whereDueDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChildMilestone whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChildMilestone whereMilestoneId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChildMilestone whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChildMilestone whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChildMilestone whereUpdatedAt($value)
 */
	class ChildMilestone extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\GrandchildMilestone
 *
 * @property int $id
 * @property int $child_milestone_id
 * @property string $name
 * @property string|null $description
 * @property int $status
 * @property string $due_date
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\ChildMilestone $child_milestone
 * @method static \Illuminate\Database\Eloquent\Builder|GrandChildMilestone newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GrandChildMilestone newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GrandChildMilestone query()
 * @method static \Illuminate\Database\Eloquent\Builder|GrandChildMilestone whereChildMilestoneId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GrandChildMilestone whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GrandChildMilestone whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GrandChildMilestone whereDueDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GrandChildMilestone whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GrandChildMilestone whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GrandChildMilestone whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GrandChildMilestone whereUpdatedAt($value)
 */
	class GrandchildMilestone extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Milestone
 *
 * @property int $id
 * @property int $user_id ユーザID
 * @property string $name
 * @property string|null $description
 * @property int $status
 * @property string $due_date
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\ChildMilestone> $child_milestones
 * @property-read int|null $child_milestones_count
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|Milestone newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Milestone newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Milestone query()
 * @method static \Illuminate\Database\Eloquent\Builder|Milestone whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Milestone whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Milestone whereDueDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Milestone whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Milestone whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Milestone whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Milestone whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Milestone whereUserId($value)
 */
	class Milestone extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property mixed $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Milestone> $milestones
 * @property-read int|null $milestones_count
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Laravel\Sanctum\PersonalAccessToken> $tokens
 * @property-read int|null $tokens_count
 * @method static \Database\Factories\UserFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 */
	class User extends \Eloquent {}
}

