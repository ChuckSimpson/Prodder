<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    public function showBlog()
    {
    	return view('blog');
    }

    public function showBlogItem($blog)
    {
    	$return_with = array(
    		'variable_name' => 'chuckie',
    		'variable_two' => 'number 2'
    	);
    	return view('blog')->with($return_with);
    }
}
