import { ILink } from '../components/BreadCrumbs';

export default function useBreadcrumbs({pathname}:{pathname: string}) {
    const pathArr = pathname.split("/")
    const breadcrumbs:ILink[]  = pathArr.slice(0, -1).map((el, idx, arr) => {
        let href = arr.slice(0, idx + 1).join("/");
        switch(el){
            case "": return {
                href: "/",
                text: 'Home'
            }
            case "shop": return null;
            default: 
                return{
                    href,
                    text: el.charAt(0).toUpperCase() + el.slice(1)
                }
        }
    }).filter((breadcrumb): breadcrumb is ILink => breadcrumb !== null);
  
  return {links: breadcrumbs}
}
