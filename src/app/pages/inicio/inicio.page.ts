import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastController} from '@ionic/angular';


interface Componente{
  icon: string;
  name: string;
  redirecTo: string;


}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  
})
export class InicioPage implements OnInit {
  @ViewChild("header") header: HTMLElement;

  componentes : Componente[] = [
    {
      icon: 'home-outline',
      name: 'Registrarse',
      redirecTo: '/formulario',
      
    },
    {
      icon: 'storefront-outline',
      name: 'Publicar',
      redirecTo: '/publicar',
      

    },
    {
      icon: 'terminal-outline',
      name: 'Formulario',
      redirecTo: '/publicar',
     
    },
    {
      icon: 'chatbox-outline',
      name: 'Mensajes',
      redirecTo: '/inicio'
    },
    {
      icon: 'bhelp-circle-outline',
      name: 'Ayuda',
      redirecTo: '/inicio'
    },
    
    {
      icon: 'apps-outline',
      name: 'Api',
      redirecTo: '/api'
    },
    {
      icon: 'apps-outline',
      name: 'Datos',
      redirecTo: '/datos'
    },
    {
      icon: 'apps-outline',
      name: 'Login',
      redirecTo: '/login'
    },
    {
      icon: 'person-add-outline',
      name: 'Registro',
      redirecTo: '/registro'
    },

  ];
  




  constructor(private menuController: MenuController, public element: ElementRef,public renderer: Renderer2,
    private afAuth: AngularFireAuth, private router: Router, private authSvc: AuthService, 
    private toastController: ToastController) { 
    
    


  }

  ngOnInit() {
  }
  //metodo Logout
  onLogOut(){
    console.log('Logout');
    this.showToast('Sesión cerrada')
    this.afAuth.signOut();
    this.router.navigateByUrl('/login');
  }
  //mostrar mensajes
  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg, 
      duration: 2000
    });
    toast.present();
  }


  mostrarMenu()
  {
    this.menuController.open('first')
  }


  
//estudiar scroll events.

  /*
  
  ionViewWillEnter() {
    this.renderer.setStyle(this.header['el'], 'webkitTransition', 'top 700ms');
  }
  
  
  
  
  
  onContentScroll(event) {
    if (event.detail.scrollTop >= 50) {
      this.renderer.setStyle(this.header['el'], 'top', '-76px');
    } else {
      this.renderer.setStyle(this.header['el'], 'top', '20px');
    }
  }*/




}
