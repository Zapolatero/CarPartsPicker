package com.MO54.carPartsPicker.services;

import java.util.List;

import com.MO54.carPartsPicker.model.SubCategory;
import com.MO54.carPartsPicker.repository.SubCategoryRepository;

import org.springframework.beans.factory.annotation.Autowired;

public class SubCategoryImplementation implements SubCategoryService {

    @Autowired
    SubCategoryRepository subCategoryRepository;

    @Override
    public List<SubCategory> getAllSubCategories() {
        return (List<SubCategory>) subCategoryRepository.findAll();
    }

    @Override
    public SubCategory getSubCategoryById(int id) {
        return subCategoryRepository.findById(id).get();
    }

    @Override
    public void addSubCategory(SubCategory subCategory) {
        subCategoryRepository.save(subCategory);
    }

    @Override
    public void deleteSubCategory(int id) {

    }

}
