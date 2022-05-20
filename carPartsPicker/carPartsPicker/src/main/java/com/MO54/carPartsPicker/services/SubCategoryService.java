package com.MO54.carPartsPicker.services;

import java.util.List;

import com.MO54.carPartsPicker.model.SubCategory;

public interface SubCategoryService {

    public List<SubCategory> getAllSubCategories();

    public SubCategory getSubCategoryById(int id);

    public void addSubCategory(SubCategory subCategory);

    public void deleteSubCategory(int id);

}
