import { Button } from "@/components/common/button";
import { useRouter } from "next/router";
import { CSSProperties, useCallback } from "react";

const Page404 = () => {
  const router = useRouter();

  const goHome = useCallback(() => router.push("/"), [router]);

  return (
    <div className={`d-flex justify-content-center `} style={styles.bg}>
      <div
        className={`d-flex justify-content-center col-lg-6 m-auto flex-column animate__animated animate__tada`}
      >
        <h2 className=""  style={styles.title}>
          Pagina no encontrada en
          <b className="text-white"> Epagricula RD</b>
        </h2>
        <div className="mt-3">
          <Button onClick={goHome}>Volver al inicio</Button>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  bg: {
    backgroundColor: "#008374",
    height: "100vh",
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 99909,
  },
  title: {
    color: "#8ad4cb",
  },
};

export default Page404;
