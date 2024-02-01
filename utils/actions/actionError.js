import actionResponse from "./actionResponse";

export default function actionError(actionName, additionalData = {}, revalidatePath = null, redirectPath = null) {
    return actionResponse(false, actionName, additionalData, revalidatePath, redirectPath);
}
