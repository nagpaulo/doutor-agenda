import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SingUpForm from "./components/sign-up-form";
import SingInForm from "./components/sign-in-form";

const AuthenticationPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Criar conta</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <SingInForm />
        </TabsContent>
        <TabsContent value="register">
          <SingUpForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthenticationPage;
