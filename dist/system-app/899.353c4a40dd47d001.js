"use strict";(self.webpackChunksystem_app=self.webpackChunksystem_app||[]).push([[899],{6899:(x,h,c)=>{c.r(h),c.d(h,{AccountModule:()=>B});var m=c(177),u=c(7679),e=c(4438),k=c(4796),s=c(4341);let E=(()=>{class a{constructor(t,r){this.authService=t,this.router=r,this.title="KAMABYEAPP",this.token="",this.credentials={username:"",password:""}}ngOnInit(){console.info("HeaderComponent ngOnInit")}login(){console.info("Ingresamos a login"),console.info(this.credentials);const t=new FormData;t.append("username",this.credentials.username),t.append("password",this.credentials.password),this.authService.loginWithCredentials(t).subscribe(r=>{null!=r.body&&(console.info("JWT Authenticado"),this.token=r.body,console.info(this.token),this.authService.loguear(this.token),"ADMIN"==this.authService.getRole()?(console.info("Redireccionando a /admin"),this.router.navigate(["/admin"])):(console.info("Redireccionando a /account"),this.router.navigate(["/account"])))},r=>{console.error("Error al iniciar sesi\xf3n",r)})}static#e=this.\u0275fac=function(r){return new(r||a)(e.rXU(k.u),e.rXU(u.Ix))};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-header"]],decls:80,vars:3,consts:[["formulario","ngForm"],[1,"navbar","navbar-expand-lg","bg-body-tertiary","fixed-top"],[1,"container-fluid"],["href","account",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],["role","search",1,"d-flex"],["type","search","placeholder","Search","aria-label","Search",1,"form-control","me-2"],["type","submit",1,"btn","btn-outline-success"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],["routerLinkActive","active",1,"nav-item"],["aria-current","page","href","#",1,"nav-link"],[1,"navbar-nav"],[1,"nav-item"],["data-bs-toggle","modal","href","#","data-bs-target","#exampleModal",1,"nav-link"],["href","#",1,"nav-link"],[1,"nav-item","dropdown"],["href","#","role","button","data-bs-toggle","dropdown","data-bs-display","static","aria-expanded","false",1,"nav-link","dropdown-toggle"],[1,"dropdown-menu","dropdown-menu-lg-end"],["href","/account",1,"dropdown-item"],["href","/account/profile",1,"dropdown-item"],[1,"dropdown-divider"],["href","/account/partitura",1,"dropdown-item"],["href","/account/obra",1,"dropdown-item"],["href","#",1,"dropdown-item"],["id","exampleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title","fs-5"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"form-floating"],["placeholder","Username","type","text","id","username","name","username",1,"form-control",3,"ngModelChange","ngModel"],["for","username"],["placeholder","Password","type","password","id","password","name","password",1,"form-control",3,"ngModelChange","ngModel"],["for","password"],["type","submit",1,"btn","btn-primary",3,"click"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["type","button",1,"btn","btn-primary"]],template:function(r,o){if(1&r){const i=e.RV6();e.j41(0,"h1"),e.EFF(1,"header.component.html"),e.k0s(),e.j41(2,"nav",1)(3,"div",2)(4,"a",3),e.EFF(5),e.k0s(),e.j41(6,"button",4),e.nrm(7,"span",5),e.k0s(),e.j41(8,"div",6)(9,"form",7),e.nrm(10,"input",8),e.j41(11,"button",9),e.EFF(12,"Search"),e.k0s()(),e.j41(13,"ul",10)(14,"li",11)(15,"a",12),e.EFF(16,"Cursos"),e.k0s()()(),e.j41(17,"ul",13)(18,"li",14)(19,"a",15),e.EFF(20,"Log In"),e.k0s()(),e.j41(21,"li",14)(22,"a",16),e.EFF(23,"Notificaciones"),e.k0s()(),e.j41(24,"li",17)(25,"a",18),e.EFF(26," Usuario "),e.k0s(),e.j41(27,"ul",19)(28,"li")(29,"a",20),e.EFF(30,"Dashboard"),e.k0s()(),e.j41(31,"li")(32,"a",21),e.EFF(33,"Mi Perfil"),e.k0s()(),e.j41(34,"li")(35,"a",21),e.EFF(36,"Mis Favoritos"),e.k0s()(),e.j41(37,"li"),e.nrm(38,"hr",22),e.k0s(),e.j41(39,"li")(40,"a",23),e.EFF(41,"My Shop Cart"),e.k0s()(),e.j41(42,"li"),e.nrm(43,"hr",22),e.k0s(),e.j41(44,"li")(45,"a",24),e.EFF(46,"Mis Obras"),e.k0s()(),e.j41(47,"li")(48,"a",23),e.EFF(49,"Mis Partituras"),e.k0s()(),e.j41(50,"li"),e.nrm(51,"hr",22),e.k0s(),e.j41(52,"li")(53,"a",25),e.EFF(54,"Log out"),e.k0s()()()()()()()(),e.j41(55,"div",26)(56,"div",27)(57,"div",28)(58,"div",29)(59,"h1",30),e.EFF(60,"Log in to KamabyeApp"),e.k0s(),e.nrm(61,"button",31),e.k0s(),e.j41(62,"div",32)(63,"form",null,0)(65,"div",33)(66,"input",34),e.mxI("ngModelChange",function(n){return e.eBV(i),e.DH7(o.credentials.username,n)||(o.credentials.username=n),e.Njj(n)}),e.k0s(),e.j41(67,"label",35),e.EFF(68,"Username"),e.k0s()(),e.j41(69,"div",33)(70,"input",36),e.mxI("ngModelChange",function(n){return e.eBV(i),e.DH7(o.credentials.password,n)||(o.credentials.password=n),e.Njj(n)}),e.k0s(),e.j41(71,"label",37),e.EFF(72,"Password"),e.k0s()(),e.j41(73,"button",38),e.bIt("click",function(){return e.eBV(i),e.Njj(o.login())}),e.EFF(74,"Iniciar Sesi\xf3n"),e.k0s()()(),e.j41(75,"div",39)(76,"button",40),e.EFF(77,"Restaurar contrase\xf1a"),e.k0s(),e.j41(78,"button",41),e.EFF(79,"Crear cuenta"),e.k0s()()()()()}2&r&&(e.R7$(5),e.JRh(o.title),e.R7$(61),e.R50("ngModel",o.credentials.username),e.R7$(4),e.R50("ngModel",o.credentials.password))},dependencies:[u.wQ,s.qT,s.me,s.BC,s.cb,s.vS,s.cV]})}return a})(),_=(()=>{class a{static#e=this.\u0275fac=function(r){return new(r||a)};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-navbar"]],decls:0,vars:0,template:function(r,o){}})}return a})(),y=(()=>{class a{static#e=this.\u0275fac=function(r){return new(r||a)};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-footer"]],decls:2,vars:0,template:function(r,o){1&r&&(e.j41(0,"p"),e.EFF(1,"footer works!"),e.k0s())}})}return a})(),w=(()=>{class a{ngOnInit(){console.info("AccountComponent ngOnInit")}static#e=this.\u0275fac=function(r){return new(r||a)};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-account"]],decls:7,vars:0,consts:[[1,"row"]],template:function(r,o){1&r&&(e.j41(0,"div",0)(1,"h1"),e.EFF(2,"account.component.html"),e.k0s(),e.nrm(3,"app-header")(4,"app-navbar")(5,"router-outlet")(6,"app-footer"),e.k0s())},dependencies:[u.n3,E,_,y],encapsulation:2})}return a})();var O=c(8032),d=c.n(O),g=c(1626),f=c(7673);const p=[{id:1,instrumento:"instrumento1"},{id:2,instrumento:"instrumento2"},{id:3,instrumento:"instrumento3"},{id:4,instrumento:"instrumento4"}],F=[{id:1,nombre:"Oriundos de Tlahuitoltepec",compositor:"Eleazar Hern\xe1ndez V\xe1squez",arreglista:"Eleazar Hern\xe1ndez V\xe1squez",letrista:"Eleazar Hern\xe1ndez V\xe1squez",genero:"Danz\xf3n",precio:100,embedAudio:"https://open.spotify.com/embed/track/7rhKh1Ool2Yel5JXmiemZB?utm_source=generator&theme=0",embedVideo:"https://www.youtube.com/embed/Yn5vQ66q7os?si=9m38F_lD8ABGzzuR",createdAt:new Date,modifiedAt:new Date,partituras:p},{id:2,nombre:"Xaab Newex",compositor:"Xaab Newex",arreglista:"Jose Luis Hernandez V\xe1squez",letrista:"Jose Luis Hernandez V\xe1squez",genero:"Marcha",precio:300,embedAudio:"https://open.spotify.com/embed/track/7rhKh1Ool2Yel5JXmiemZB?utm_source=generator&theme=0",embedVideo:"https://www.youtube.com/embed/Yn5vQ66q7os?si=9m38F_lD8ABGzzuR",createdAt:new Date,modifiedAt:new Date,partituras:p},{id:3,nombre:"Tu Sonrisa",compositor:"Tu Sonrisa",arreglista:"Pedro Hernandez Vasquez",letrista:"Pedro Hernandez Vasquez",genero:"Son",precio:300,embedAudio:"https://open.spotify.com/embed/track/7rhKh1Ool2Yel5JXmiemZB?utm_source=generator&theme=0",embedVideo:"https://www.youtube.com/embed/Yn5vQ66q7os?si=9m38F_lD8ABGzzuR",createdAt:new Date,modifiedAt:new Date,partituras:p},{id:4,nombre:"Leticia Gallardo",compositor:"Compositor4",arreglista:"arreglista4",letrista:"letrista4",genero:"genero4",precio:400,embedAudio:"https://open.spotify.com/embed/track/7rhKh1Ool2Yel5JXmiemZB?utm_source=generator&theme=0",embedVideo:"https://www.youtube.com/embed/Yn5vQ66q7os?si=9m38F_lD8ABGzzuR",createdAt:new Date,modifiedAt:new Date,partituras:p}];let j=(()=>{class a{constructor(t){this.http=t,this.urlEndPoint="http://localhost:8081/system/apiv1/obra",this.urlEndPointPartitura="http://localhost:8081/system/apiv1/partitura",this.httpHeaders=new g.Lr({"Content-Type":"application/json"})}getObras(){return this.http.get(`${this.urlEndPoint}`,{observe:"response"})}getObra(t){return this.http.get(`${this.urlEndPoint}/${t}`,{observe:"response"})}crearObraFormData(t){return this.http.post(this.urlEndPoint,t,{observe:"response"})}actualizarObraFormData(t,r){return this.http.put(`${this.urlEndPoint}/${r}`,t,{observe:"response"})}eliminarObra(t){return this.http.delete(`${this.urlEndPoint}/${t}`,{observe:"response"})}getObraView(t){return this.http.get(`${this.urlEndPointPartitura}/view/${t}`,{observe:"response"})}getObrasJSON(){return(0,f.of)(F)}getObraJSON(t){console.info("El id Obra es "+t);const r=F.find(o=>o.id==t);return(0,f.of)(r)}static#e=this.\u0275fac=function(r){return new(r||a)(e.KVO(g.Qq))};static#t=this.\u0275prov=e.jDH({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var C=c(345);const M=()=>["/account/obra/form"],S=a=>["/account/obra/form",a];function R(a,b){if(1&a){const t=e.RV6();e.qex(0),e.j41(1,"tr")(2,"th"),e.nrm(3,"input",11),e.k0s(),e.j41(4,"th"),e.EFF(5),e.k0s(),e.j41(6,"th")(7,"div",0)(8,"h1"),e.EFF(9),e.k0s()(),e.j41(10,"div",0),e.EFF(11),e.k0s(),e.j41(12,"div",0),e.EFF(13),e.k0s(),e.j41(14,"div",0),e.EFF(15),e.k0s()(),e.j41(16,"th"),e.EFF(17),e.k0s(),e.j41(18,"th"),e.EFF(19),e.k0s(),e.j41(20,"th"),e.nrm(21,"iframe",14),e.k0s(),e.j41(22,"th"),e.nrm(23,"iframe",15),e.k0s(),e.j41(24,"th")(25,"div",0)(26,"button",16),e.EFF(27,"Editar"),e.k0s()(),e.j41(28,"div",0)(29,"button",17),e.bIt("click",function(){const o=e.eBV(t).$implicit,i=e.XpG(2);return e.Njj(i.eliminarObra(o))}),e.EFF(30,"Eliminar"),e.k0s()(),e.j41(31,"div",0)(32,"button",17),e.bIt("click",function(){const o=e.eBV(t).$implicit,i=e.XpG(2);return e.Njj(i.comprarObra(o))}),e.EFF(33,"Eliminar"),e.k0s()(),e.j41(34,"div",0)(35,"button",17),e.bIt("click",function(){const o=e.eBV(t).$implicit,i=e.XpG(2);return e.Njj(i.agregarObraShopCart(o))}),e.EFF(36,"Eliminar"),e.k0s()()()(),e.bVm()}if(2&a){const t=b.$implicit,r=e.XpG(2);e.R7$(5),e.JRh(t.nombre),e.R7$(4),e.JRh(t.nombre),e.R7$(2),e.SpI(" Compositor: ",t.compositor," "),e.R7$(2),e.SpI(" Arreglista: ",t.arreglista," "),e.R7$(2),e.SpI(" Letrista: ",t.letrista," "),e.R7$(2),e.JRh(t.genero),e.R7$(2),e.JRh(t.precio),e.R7$(2),e.Y8G("src",r.domSanitizer.bypassSecurityTrustResourceUrl(t.embedAudio),e.f$h),e.R7$(2),e.Y8G("src",r.domSanitizer.bypassSecurityTrustResourceUrl(t.embedVideo),e.f$h),e.R7$(3),e.Y8G("routerLink",e.eq3(10,S,t.id))}}function T(a,b){if(1&a&&(e.j41(0,"table",8)(1,"thead",9)(2,"tr")(3,"th",10),e.nrm(4,"input",11),e.k0s(),e.j41(5,"th",10),e.EFF(6,"Vista Previa"),e.k0s(),e.j41(7,"th",10),e.EFF(8,"Datos de la Obra"),e.k0s(),e.j41(9,"th",10),e.EFF(10,"Genero"),e.k0s(),e.j41(11,"th",10),e.EFF(12,"Precio"),e.k0s(),e.j41(13,"th",10),e.EFF(14,"Audio"),e.k0s(),e.j41(15,"th",10),e.EFF(16,"Video"),e.k0s(),e.j41(17,"th",10),e.EFF(18,"Acciones"),e.k0s()()(),e.j41(19,"tbody",12),e.DNE(20,R,37,12,"ng-container",13),e.k0s()()),2&a){const t=e.XpG();e.R7$(20),e.Y8G("ngForOf",t.obras)}}let V=(()=>{class a{constructor(t,r){this.obraService=t,this.domSanitizer1=r,this.obras=[],this.domSanitizer=r}ngOnInit(){console.info("ObrasComponent ngOnInit"),this.cargarObrasJSON()}eliminarObra(t){const r=d().mixin({customClass:{confirmButton:"btn btn-success",cancelButton:"btn btn-danger"},buttonsStyling:!1});r.fire({title:"\xbfEst\xe1s seguro?",text:`Estas seguro de eliminar el objeto ${t.nombre}`,icon:"warning",showCancelButton:!0,confirmButtonText:"S\xed, Eliminiar",cancelButtonText:"No, cancelar!",reverseButtons:!0}).then(o=>{o.isConfirmed&&this.obraService.eliminarObra(t.id).subscribe(i=>{this.obras=this.obras.filter(l=>l!=t),r.fire("Eliminado!",`Obra ${i.body?.nombre} eliminado con \xe9xito`,"success")})})}cargarObras(){this.obraService.getObras().subscribe(t=>{null!=t.body?this.obras=t.body:console.error("El cuerpo de la respuesta es nulo.")},t=>{d().fire("Mensaje: ",`${t.error.mensaje}`,"warning"),console.error("Error al obtener las obras: ",t)})}cargarObrasJSON(){this.obraService.getObrasJSON().subscribe(t=>{console.info("ObrasComponent response"),null!=t?this.obras=t:console.error("El cuerpo de la respuesta es nulo.")},t=>{d().fire("Mensaje: ",`${t.error.mensaje}`,"warning"),console.error("Error al obtener las obras: ",t)})}agregarObraShopCart(t){throw new Error("Method not implemented.")}comprarObra(t){throw new Error("Method not implemented.")}static#e=this.\u0275fac=function(r){return new(r||a)(e.rXU(j),e.rXU(C.up))};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-obras"]],decls:61,vars:3,consts:[[1,"row"],[1,"col"],["aria-label","Page navigation example"],[1,"pagination"],[1,"page-item"],["href","#",1,"page-link"],["type","button",1,"btn","btn-rounded","btn-primary",3,"routerLink"],["class","table table-hover table-responsive align-middle",4,"ngIf"],[1,"table","table-hover","table-responsive","align-middle"],[1,"table-light"],["scope","col"],["type","checkbox","id","checkboxNoLabel","value","","aria-label","...",1,"form-check-input"],[1,"table-group-divider"],[4,"ngFor","ngForOf"],["width","100%","height","100%","frameBorder","0","allowfullscreen","","allow","autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture","loading","lazy",2,"border-radius","12px",3,"src"],["width","100%","height","100%","title","YouTube video player","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share","allowfullscreen","",3,"src"],["type","submit",1,"btn","btn-primary",3,"routerLink"],["type","submit",1,"btn","btn-danger",3,"click"]],template:function(r,o){1&r&&(e.j41(0,"div",0)(1,"h1"),e.EFF(2,"obras.component.html"),e.k0s(),e.j41(3,"div",0)(4,"div",0)(5,"div",1)(6,"h1"),e.EFF(7,"Mis obras"),e.k0s()(),e.j41(8,"div",1)(9,"nav",2)(10,"ul",3)(11,"li",4)(12,"a",5),e.EFF(13,"First"),e.k0s()(),e.j41(14,"li",4)(15,"a",5),e.EFF(16,"Previous"),e.k0s()(),e.j41(17,"li",4)(18,"a",5),e.EFF(19,"1"),e.k0s()(),e.j41(20,"li",4)(21,"a",5),e.EFF(22,"2"),e.k0s()(),e.j41(23,"li",4)(24,"a",5),e.EFF(25,"3"),e.k0s()(),e.j41(26,"li",4)(27,"a",5),e.EFF(28,"Next"),e.k0s()(),e.j41(29,"li",4)(30,"a",5),e.EFF(31,"Last"),e.k0s()()()()()()(),e.j41(32,"div",0)(33,"div")(34,"button",6),e.EFF(35,"Nueva Obra"),e.k0s()()(),e.j41(36,"div",0),e.DNE(37,T,21,1,"table",7),e.j41(38,"nav",2)(39,"ul",3)(40,"li",4)(41,"a",5),e.EFF(42,"First"),e.k0s()(),e.j41(43,"li",4)(44,"a",5),e.EFF(45,"Previous"),e.k0s()(),e.j41(46,"li",4)(47,"a",5),e.EFF(48,"1"),e.k0s()(),e.j41(49,"li",4)(50,"a",5),e.EFF(51,"2"),e.k0s()(),e.j41(52,"li",4)(53,"a",5),e.EFF(54,"3"),e.k0s()(),e.j41(55,"li",4)(56,"a",5),e.EFF(57,"Next"),e.k0s()(),e.j41(58,"li",4)(59,"a",5),e.EFF(60,"Last"),e.k0s()()()()()()),2&r&&(e.R7$(34),e.Y8G("routerLink",e.lJ4(2,M)),e.R7$(3),e.Y8G("ngIf",o.obras.length>0))},dependencies:[m.Sq,m.bT,u.Wk]})}return a})();class I{constructor(){this.id=0,this.nombre="",this.compositor="",this.arreglista="",this.letrista="",this.precio=0,this.genero="",this.embedAudio="",this.embedVideo="",this.createdAt=new Date,this.modifiedAt=new Date,this.partituras=[]}}function A(a,b){if(1&a){const t=e.RV6();e.j41(0,"button",37),e.bIt("click",function(){e.eBV(t);const o=e.XpG();return e.Njj(o.crearObraFormData())}),e.EFF(1,"Crear"),e.k0s()}}function D(a,b){if(1&a){const t=e.RV6();e.j41(0,"button",38),e.bIt("click",function(){e.eBV(t);const o=e.XpG();return e.Njj(o.actualizarObraFormData())}),e.EFF(1,"Actualizar"),e.k0s()}}let v=(()=>{class a{constructor(t,r,o){this.obraService=t,this.router=r,this.activateRoute=o,this.obra=new I,this.audio=new File([],""),this.partituras=[]}ngOnInit(){console.info("ObraformComponent ngOnInit()"),this.cargarObra()}cargarObraJSON(){this.activateRoute.params.subscribe(t=>{let r=t.idObra;r&&this.obraService.getObraJSON(r).subscribe(o=>{null!=o?(this.obra=o,console.info(this.obra)):console.error("El cuerpo de la respuesta es nulo.")},o=>{this.router.navigate(["/admin/obras"]),d().fire("Mensaje: ",`${o.error.mensaje}`,"warning"),console.error("Error al obtener el usuario: ",o)})})}cargarObra(){console.info("ObraformComponent cargarObra()"),this.activateRoute.params.subscribe(t=>{let r=t.idObra;r&&this.obraService.getObra(r).subscribe(o=>{null!==o.body?(this.obra=o.body,console.info(this.obra)):console.error("El cuerpo de la respuesta es nulo.")},o=>{this.router.navigate(["/admin/obras"]),d().fire("Mensaje: ",`${o.error.mensaje}`,"warning"),console.error("Error al obtener el usuario: ",o)})})}handleFileInput(t){this.audio=t.target.files[0]}crearObraFormData(){const t=new FormData;t.set("audio",this.audio);const r=JSON.stringify(this.obra);t.set("obraJSON",r),this.obraService.crearObraFormData(t).subscribe(o=>{null!=o.body?(this.router.navigate(["/account/obra"]),d().fire("Mensaje",`Obra: ${o.body.nombre} creado con \xe9xito!`,"success")):console.error("El cuerpo de la respuesta es nulo.")},o=>{this.router.navigate(["/account/obra"]),d().fire("Mensaje",`${o.error.mensaje}`,"warning"),console.error("Error al crear la obra: ",o)})}actualizarObraFormData(){const t=new FormData;t.set("audio",this.audio);const r=JSON.stringify(this.obra,null,2);t.set("obraJSON",r),this.obraService.actualizarObraFormData(t,this.obra.id).subscribe(o=>{null!=o.body?(this.router.navigate(["/account/obra"]),d().fire("Mensaje",`Obra: ${o.body.nombre} creado con \xe9xito!`,"success")):console.error("El cuerpo de la respuesta es nulo.")},o=>{this.router.navigate(["/account/obra"]),d().fire("Mensaje",`${o.error.mensaje}`,"warning"),console.error("Error al crear la obra: ",o)})}static#e=this.\u0275fac=function(r){return new(r||a)(e.rXU(j),e.rXU(u.Ix),e.rXU(u.nX))};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-obraform"]],decls:85,vars:10,consts:[["formulario","ngForm"],["elseBlock",""],[1,"row"],[1,"col"],[1,"form-floating"],["placeholder","Nombre","type","text","id","nombre","name","nombre",1,"form-control",3,"ngModelChange","ngModel"],["for","nombre"],["placeholder","Compositor","type","text","id","compositor","name","compositor",1,"form-control",3,"ngModelChange","ngModel"],["for","compositor"],["placeholder","Arreglista","type","text","id","arreglista","name","arreglista",1,"form-control",3,"ngModelChange","ngModel"],["for","arreglista"],["placeholder","Letrista","type","text","id","letrista","name","letrista",1,"form-control",3,"ngModelChange","ngModel"],["for","letrista"],["placeholder","Genero","type","text","id","genero","name","genero",1,"form-control",3,"ngModelChange","ngModel"],["for","genero"],[1,"input-group"],[1,"input-group-text"],["placeholder","Precio","type","text","id","precio","name","precio",1,"form-control",3,"ngModelChange","ngModel"],["for","precio"],["placeholder","URL Audio","id","embedAudio","name","embedAudio",1,"form-control",2,"height","100px",3,"ngModelChange","ngModel"],["for","embedAudio"],["placeholder","URL Video","id","embedVideo","name","embedVideo",1,"form-control",2,"height","100px",3,"ngModelChange","ngModel"],["for","embedVideo"],[1,"mb-3"],["for","formFile",1,"form-label"],["type","file","id","audio","name","audio",1,"form-control",3,"change"],["type","submit","class","btn btn-success",3,"click",4,"ngIf","ngIfElse"],["id","accordionExample",1,"accordion"],[1,"accordion-item"],[1,"accordion-header"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapseOne","aria-expanded","true","aria-controls","collapseOne",1,"accordion-button"],["id","collapseOne","data-bs-parent","#accordionExample",1,"accordion-collapse","collapse"],[1,"accordion-body"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapseTwo","aria-expanded","false","aria-controls","collapseTwo",1,"accordion-button","collapsed"],["id","collapseTwo","data-bs-parent","#accordionExample",1,"accordion-collapse","collapse"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapseThree","aria-expanded","false","aria-controls","collapseThree",1,"accordion-button","collapsed"],["id","collapseThree","data-bs-parent","#accordionExample",1,"accordion-collapse","collapse"],["type","submit",1,"btn","btn-success",3,"click"],["type","submit",1,"btn","btn-primary",3,"click"]],template:function(r,o){if(1&r){const i=e.RV6();e.j41(0,"form",null,0)(2,"div",2)(3,"div",3)(4,"div",4)(5,"input",5),e.mxI("ngModelChange",function(n){return e.eBV(i),e.DH7(o.obra.nombre,n)||(o.obra.nombre=n),e.Njj(n)}),e.k0s(),e.j41(6,"label",6),e.EFF(7,"Nombre"),e.k0s()(),e.j41(8,"div",4)(9,"input",7),e.mxI("ngModelChange",function(n){return e.eBV(i),e.DH7(o.obra.compositor,n)||(o.obra.compositor=n),e.Njj(n)}),e.k0s(),e.j41(10,"label",8),e.EFF(11,"Compositor"),e.k0s()(),e.j41(12,"div",4)(13,"input",9),e.mxI("ngModelChange",function(n){return e.eBV(i),e.DH7(o.obra.arreglista,n)||(o.obra.arreglista=n),e.Njj(n)}),e.k0s(),e.j41(14,"label",10),e.EFF(15,"Arreglista"),e.k0s()(),e.j41(16,"div",4)(17,"input",11),e.mxI("ngModelChange",function(n){return e.eBV(i),e.DH7(o.obra.letrista,n)||(o.obra.letrista=n),e.Njj(n)}),e.k0s(),e.j41(18,"label",12),e.EFF(19,"Letrista"),e.k0s()(),e.j41(20,"div",4)(21,"input",13),e.mxI("ngModelChange",function(n){return e.eBV(i),e.DH7(o.obra.genero,n)||(o.obra.genero=n),e.Njj(n)}),e.k0s(),e.j41(22,"label",14),e.EFF(23,"Genero"),e.k0s()(),e.j41(24,"div",15)(25,"span",16),e.EFF(26,"$"),e.k0s(),e.j41(27,"div",4)(28,"input",17),e.mxI("ngModelChange",function(n){return e.eBV(i),e.DH7(o.obra.precio,n)||(o.obra.precio=n),e.Njj(n)}),e.k0s(),e.j41(29,"label",18),e.EFF(30,"Precio"),e.k0s()(),e.j41(31,"span",16),e.EFF(32,".00"),e.k0s()(),e.j41(33,"div",4)(34,"textarea",19),e.mxI("ngModelChange",function(n){return e.eBV(i),e.DH7(o.obra.embedAudio,n)||(o.obra.embedAudio=n),e.Njj(n)}),e.k0s(),e.j41(35,"label",20),e.EFF(36,"URL Audio"),e.k0s()(),e.j41(37,"div",4)(38,"textarea",21),e.mxI("ngModelChange",function(n){return e.eBV(i),e.DH7(o.obra.embedVideo,n)||(o.obra.embedVideo=n),e.Njj(n)}),e.k0s(),e.j41(39,"label",22),e.EFF(40,"URL Video"),e.k0s()(),e.j41(41,"div",23)(42,"label",24),e.EFF(43,"Seleccionar archivo de audio"),e.k0s(),e.j41(44,"input",25),e.bIt("change",function(n){return e.eBV(i),e.Njj(o.handleFileInput(n))}),e.k0s()()(),e.DNE(45,A,2,0,"button",26)(46,D,2,0,"ng-template",null,1,e.C5r),e.k0s(),e.j41(48,"div",27)(49,"div",28)(50,"h2",29)(51,"button",30),e.EFF(52," Accordion Item #1 "),e.k0s()(),e.j41(53,"div",31)(54,"div",32)(55,"strong"),e.EFF(56,"This is the first item's accordion body."),e.k0s(),e.EFF(57," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "),e.j41(58,"code"),e.EFF(59,".accordion-body"),e.k0s(),e.EFF(60,", though the transition does limit overflow. "),e.k0s()()(),e.j41(61,"div",28)(62,"h2",29)(63,"button",33),e.EFF(64," Accordion Item #2 "),e.k0s()(),e.j41(65,"div",34)(66,"div",32)(67,"strong"),e.EFF(68,"This is the second item's accordion body."),e.k0s(),e.EFF(69," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "),e.j41(70,"code"),e.EFF(71,".accordion-body"),e.k0s(),e.EFF(72,", though the transition does limit overflow. "),e.k0s()()(),e.j41(73,"div",28)(74,"h2",29)(75,"button",35),e.EFF(76," Accordion Item #3 "),e.k0s()(),e.j41(77,"div",36)(78,"div",32)(79,"strong"),e.EFF(80,"This is the third item's accordion body."),e.k0s(),e.EFF(81," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "),e.j41(82,"code"),e.EFF(83,".accordion-body"),e.k0s(),e.EFF(84,", though the transition does limit overflow. "),e.k0s()()()()()}if(2&r){const i=e.sdS(47);e.R7$(5),e.R50("ngModel",o.obra.nombre),e.R7$(4),e.R50("ngModel",o.obra.compositor),e.R7$(4),e.R50("ngModel",o.obra.arreglista),e.R7$(4),e.R50("ngModel",o.obra.letrista),e.R7$(4),e.R50("ngModel",o.obra.genero),e.R7$(7),e.R50("ngModel",o.obra.precio),e.R7$(6),e.R50("ngModel",o.obra.embedAudio),e.R7$(4),e.R50("ngModel",o.obra.embedVideo),e.R7$(7),e.Y8G("ngIf",!o.obra.id)("ngIfElse",i)}},dependencies:[m.bT,s.qT,s.me,s.BC,s.cb,s.vS,s.cV],encapsulation:2})}return a})();const N=[{path:"",component:w,children:[{path:"",redirectTo:"obra",pathMatch:"full"},{path:"obra",component:V},{path:"obra/form",component:v},{path:"obra/form/:idObra",component:v}]}];let B=(()=>{class a{static#e=this.\u0275fac=function(r){return new(r||a)};static#t=this.\u0275mod=e.$C({type:a});static#o=this.\u0275inj=e.G2t({imports:[m.MD,u.iI.forChild(N),s.YN,u.iI]})}return a})()}}]);