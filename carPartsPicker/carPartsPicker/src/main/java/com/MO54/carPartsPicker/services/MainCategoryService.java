package com.MO54.carPartsPicker.services;

import java.util.List;

import com.MO54.carPartsPicker.model.MainCategory;

public interface MainCategoryService {
    public List<MainCategory> getAllMainCategories();

    public MainCategory getMainCategoryById(int id);

    public void addMainCategory(MainCategory mainCategory);

    public void deleteMainCategoryy(int id);
}
