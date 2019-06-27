<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Auth;

class PageController extends Controller
{
    public function showHome()
    {
        $string = 'not logged in';
        if (Auth::user()) {
            $categories = Auth::user()->categories;
            $string = 'logged in';
        }
        return view('welcome')->with([
            'test' => $string,
            'categories' => $categories
        ]);
    }

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
