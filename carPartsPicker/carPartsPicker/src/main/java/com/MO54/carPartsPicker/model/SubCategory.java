package com.MO54.carPartsPicker.model;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table
@PrimaryKeyJoinColumn(name = "id")
public class SubCategory extends Category {

    @ManyToOne
    private MainCategory mainCategory;

    public SubCategory(int id, String name, Set<CarPart> carParts, MainCategory mainCategory) {
        super(id, name, carParts);
        this.mainCategory = mainCategory;
    }

    public SubCategory(MainCategory mainCategory) {
        this.mainCategory = mainCategory;
    }

    public SubCategory() {

    }

    public MainCategory getMainCategory() {
        return mainCategory;
    }

    public void setMainCategory(MainCategory mainCategory) {
        this.mainCategory = mainCategory;
    }

}
