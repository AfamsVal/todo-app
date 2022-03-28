import "./notify.css";

interface IToast {
    position: string[];
    timeout: number;
    container: HTMLDivElement;
    success(msg: string): void;
    error(msg: string): void;
    warning(msg: string): void;
    info(msg: string): void;
    successDialog(msg: string, action?: Function): void;
    errorDialog(msg: string, action?: Function): void;
    activityLoader(): void;
    comingSoon(): void;
    confirm(msg: string, options: Options): void;
}

type Options = {
    yes: Function;
    no?: Function;
}

class Toast implements IToast {
    position: string[];
    timeout: number;
    container: HTMLDivElement;
    constructor(position = "top right", timeout = 5000) {
        this.position = position.split(" ");
        this.timeout = timeout;
        this.container = document.createElement("div");
        this.container.classList.add("toast-container");
        this.container.classList.add(this.position[0]);
        this.container.classList.add(this.position[1]);
        document.body.prepend(this.container);
    }

    success(msg: any) {
        const toast = document.createElement("div");
        toast.classList.add("toast");
        toast.classList.add("opaque");
        toast.classList.add("success");
        toast.classList.add("show");
        toast.innerHTML = `&#10003&nbsp;${msg}`;
        this.container.appendChild(toast);

        setTimeout(() => {
            this.container.removeChild(toast);
        }, this.timeout);
    }

    comingSoon() {
        const confirm = document.createElement("div");
        confirm.classList.add("toastr-confirm");
        confirm.classList.add("show");
        confirm.innerHTML = `<div class='toastr-confirm-body'>
    <div class="d-flex justify-content-center">
        <img src="/coming-soon.gif" width="200px" height="200px">
    </div>
    <h1 class='text-center mt-3 mb-1 fw-bold'>Coming Soon</h1>
    <div class='text-gray-one text-center'>Watch this space</div>
    <div class='toastr-actions'>
      <button id='toastr-btn-no' class='toastr-btn-no mx-0'>Close</button>
    </div></div>`;

        this.container.appendChild(confirm);
        document.querySelector("#toastr-btn-no")!.addEventListener(
            "click",
            () => {
                this.container.removeChild(confirm);
            },
            true
        );
    }

    successDialog(message: any, action?: Function) {
        const confirm = document.createElement("div");
        confirm.classList.add("toastr-confirm");
        confirm.classList.add("show");
        confirm.innerHTML = `<div class='toastr-confirm-body'>
    <div class="d-flex justify-content-center">
        <img src="/success.gif" width="200px" height="200px">
    </div>
    <div class='toastr-title my-3'>${message}</div>
    <div class='toastr-actions'>
      <button id='toastr-btn-no' class='toastr-btn-no mx-0'>Close</button>
    </div></div>`;

        this.container.appendChild(confirm);
        document.querySelector("#toastr-btn-no")!.addEventListener(
            "click",
            () => {
                this.container.removeChild(confirm);
                action && action();
            },
            true
        );
    }

    error(msg: any) {
        const toast = document.createElement("div");
        toast.classList.add("toast");
        toast.classList.add("opaque");
        toast.classList.add("error");
        toast.classList.add("show");
        toast.innerHTML = `&#x1F5D9;&nbsp;${msg}`;
        this.container.appendChild(toast);

        setTimeout(() => {
            this.container.removeChild(toast);
        }, this.timeout);
    }

    errorDialog(message: any, action?: Function) {
        const confirm = document.createElement("div");
        confirm.classList.add("toastr-confirm");
        confirm.classList.add("show");
        confirm.innerHTML = `<div class='toastr-confirm-body'>
    <div class="d-flex justify-content-center">
        <img src="/error.gif" width="200px" height="200px">
    </div>
    <div class='toastr-title my-5'>${message}</div>
    <div class='toastr-actions'>
      <button id='toastr-btn-no' class='toastr-btn-no mx-0'>Close</button>
    </div></div>`;

        this.container.appendChild(confirm);
        document.querySelector("#toastr-btn-no")!.addEventListener(
            "click",
            () => {
                this.container.removeChild(confirm);
                action && action();
            },
            true
        );
    }

    warning(msg: any) {
        const toast = document.createElement("div");
        toast.classList.add("toast");
        toast.classList.add("opaque");
        toast.classList.add("warning");
        toast.classList.add("show");
        toast.innerHTML = `&#9888;&nbsp;${msg}`;
        this.container.appendChild(toast);

        setTimeout(() => {
            this.container.removeChild(toast);
        }, this.timeout);
    }

    info(msg: any) {
        const toast = document.createElement("div");
        toast.classList.add("toast");
        toast.classList.add("opaque");
        toast.classList.add("info");
        toast.classList.add("show");
        toast.innerHTML = `&#8505;&nbsp;${msg}`;
        this.container.appendChild(toast);

        setTimeout(() => {
            this.container.removeChild(toast);
        }, this.timeout);
    }

    activityLoader() {
        const confirm = document.createElement("div");
        confirm.classList.add("toastr-confirm");
        confirm.classList.add("show");
        confirm.innerHTML = `<div class="d-flex justify-content-center">
        <img src="/loading.gif" width="100px" height="100px">
    </div>`;
        this.container.appendChild(confirm);
    }

    confirm(message: any, options: Options) {
        const confirm = document.createElement("div");
        confirm.classList.add("toastr-confirm");
        confirm.classList.add("show");
        confirm.innerHTML = `<div class='toastr-confirm-body'>
    <div class="d-flex justify-content-center">
        <img src="/warning-sign.gif" width="100px" height="100px">
    </div>
    <div class='toastr-title'>${message}</div>
    <div class='toastr-actions'>
    <button id='toastr-btn-yes' class='toastr-btn-yes'>Yes</button>
      <button id='toastr-btn-no' class='toastr-btn-no'>No</button>
    </div></div>`;

        this.container.appendChild(confirm);
        document.querySelector("#toastr-btn-no")!.addEventListener(
            "click",
            () => {
                this.container.removeChild(confirm);
                options.no && options.no();
            },
            true
        );
        document.querySelector("#toastr-btn-yes")!.addEventListener(
            "click",
            () => {
                this.container.removeChild(confirm);
                options.yes();
            },
            true
        );
    }
}

export const toastr: IToast = new Toast();