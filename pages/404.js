import Link from "next/link";
import { Alert } from "antd";
import { Button } from "reactstrap";

export default function Custom404() {
  return (
    <div className="404-back">
      <Alert
        message="خطای 404"
        description={
          <div>
            <p>
              صفحه مورد نظر شما یافت نشد. جهت بازگشت به صفحه اصلی کلیک کنید.
            </p>
            <Link href="/">
              <Button color="primary" size="sm">صفحه اصلی</Button>
            </Link>
          </div>
        }
        type="info"
        showIcon
        className="alert-design"
      />
    </div>
  );
}
