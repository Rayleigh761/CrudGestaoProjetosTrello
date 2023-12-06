import { NgModule } from "@angular/core";
import { Routes, RouterModule,  } from "@angular/router";
import { InicialComponent } from "./components/inicial/inicial.component";
import { ProdutosComponent } from "./components/produtos/produtos.component";
import { ProdutosViewComponent } from "./components/produtos-view/produtos-view.component";


const routes : Routes = [
    {path: '', component: InicialComponent},
    {path: 'produtos', component: ProdutosViewComponent}
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}

