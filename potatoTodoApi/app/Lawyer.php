<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lawyer extends Model
{
	protected $fillable = ['name'];

	public function payment() {
		return $this->belongsToMany(Payment::class);
	}
}
