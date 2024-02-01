import actionResponse from "./actionResponse";

export default function actionSuccess(actionName, additionalData = {}, revalidatePath = null, redirectPath = null) {
    return actionResponse(true, actionName, additionalData, revalidatePath, redirectPath);
}
