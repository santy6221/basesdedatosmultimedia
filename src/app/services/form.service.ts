import { Injectable } from '@angular/core';
import { ImageI } from '../interfaces/image-i'
import {AngularFireList, AngularFireObject, AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  selectedImage: ImageI;
  imageList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getNewList()
  {
    this.imageList=this.firebase.list('usuario');
    return this.imageList;
  }

  createImage(image: ImageI)
  {
    console.log("llegue hasta aqui");
    this.imageList.push({
      name: image.name,
      category: image.category,
      tags: image.tags,
      author: image.author,
      image: image.image,
    })
  }

  UpdateImage(image : ImageI)
  {
    this.imageList.update(image.$imageKey,{
      name: image.name,
      category: image.category,
      tags: image.tags,
      author: image.author,
      image: image.image,
    });
  }

  deleteUser($imageKey: string)
  {
    this.imageList.remove($imageKey);
  }
}
