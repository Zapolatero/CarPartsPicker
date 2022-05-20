package com.MO54.carPartsPicker.services;

import java.util.List;

import com.MO54.carPartsPicker.model.Category;

public interface CategoryService {

    public List<Category> getAllCategories();

    public Category getCategoryById(int id);

    public void addCategory(Category category);

    public void deleteCategory(int id);

}
