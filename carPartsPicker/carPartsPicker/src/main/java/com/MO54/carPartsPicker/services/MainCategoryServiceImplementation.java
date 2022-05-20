package com.MO54.carPartsPicker.services;

import java.util.List;

import javax.transaction.Transactional;

import com.MO54.carPartsPicker.model.MainCategory;
import com.MO54.carPartsPicker.repository.MainCategoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class MainCategoryServiceImplementation implements MainCategoryService {

    @Autowired
    MainCategoryRepository mainCategoryRepository;

    @Override
    public List<MainCategory> getAllMainCategories() {
        return (List<MainCategory>) mainCategoryRepository.findAll();
    }

    @Override
    public MainCategory getMainCategoryById(int id) {
        return mainCategoryRepository.findById(id).get();
    }

    @Override
    public void addMainCategory(MainCategory mainCategory) {
        mainCategoryRepository.save(mainCategory);
    }

    @Override
    public void deleteMainCategoryy(int id) {
        mainCategoryRepository.deleteById(id);
    }

}
