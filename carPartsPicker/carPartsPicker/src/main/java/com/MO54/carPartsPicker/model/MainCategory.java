package com.MO54.carPartsPicker.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table
@PrimaryKeyJoinColumn(name = "id")
public class MainCategory extends Category {

    @OneToMany(mappedBy = "mainCategory")
    @JsonIgnore
    private Set<SubCategory> subCategories = new HashSet<>();

    public MainCategory() {
    }

    public MainCategory(int id, String name, Set<CarPart> carParts) {
        super(id, name, carParts);
    }

    public MainCategory(int id, String name, Set<CarPart> carParts, Set<SubCategory> subCategories) {
        super(id, name, carParts);
        this.subCategories = subCategories;
    }

    public Set<SubCategory> getSubCategories() {
        return subCategories;
    }

    public void setSubCategories(Set<SubCategory> subCategories) {
        this.subCategories = subCategories;
    }
}
